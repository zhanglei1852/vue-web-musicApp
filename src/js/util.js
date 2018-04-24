export function formatTime (duration) {
	if (!duration) return '00:00'
	duration = parseInt(duration)	
	let minute = parseInt(duration / 60) 
	minute = minute >= 10 ? minute : `0${minute}`
	let second = (duration - minute * 60) % 60
	second = second >= 10? second : `0${second}`
	return `${minute}:${second}`
}