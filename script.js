const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const rec = new SpeechRecognition()
rec.lang = 'en-US'
// rec.continuous = false
rec.continuous = true

rec.onresult = function (e) {
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript
    const container = document.querySelector('.container')
    container.style.backgroundColor = script
      .toLowerCase()
      .trim(' ')
      .split('')
      .filter((k) => k !== ' ')
      .join()
      .replaceAll(',', '')

    console.log(script)
  }
}

rec.start()
