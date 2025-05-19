"use client";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Image from "next/image"
import { useState, useEffect } from "react"
import { WeatherResponseData } from "@/utils/weather"

export default function Weather() {	
	const [data, setData] = useState<WeatherResponseData | undefined>()

	useEffect(() => {
		async function getData() {
			const res = await fetch("/api/weather")
			const rawData = await res.json()
			console.log(rawData)
			setData(rawData)
		}

		getData()
	}, [])

	if(data) {
		return (
			<div className="flex items-center">
				<Image src={getWeatherIcon(data.code)} alt="Weather icon" height={64} width={64}/>
				<h1>{data.temperature} *C</h1>
			</div>
		)
	} else {
		return (
			<span>Loading...</span>
		)
	}
}

export const getStaticProps = (async () => {
	return { props: { weather: process.env.OPENWEATHERAPI! } }
}) satisfies GetStaticProps<{
	weather: string
}>

function getWeatherIcon(weatherState: string): string {
	return `https://openweathermap.org/img/wn/${weatherState}@2x.png`
}
