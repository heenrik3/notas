import { Notification } from '../components/Notification.js'

const NOTIFICATION_TIMEOUT = 3 //secs

class NotifyView {
  _parentEl = document.querySelector('.notification')
  _data
  //   _audio = document.getElementById('audio')
  constructor() {
    // this._audio = new Audio(sound)
  }

  newNotification(type, message) {
    this._data = {
      type: type,
      message: message,
    }
    const markup = this.generateMarkup()

    // this.playAudioNotification()

    this._parentEl.insertAdjacentHTML('beforeend', markup)

    this.removeGeneratedNotif()
  }

  playAudioNotification() {
    this._audio.play()
  }

  _clear() {
    this._parentEl.value = ''
  }

  generateMarkup() {
    return Notification(this)
  }

  removeGeneratedNotif() {
    const _this = this
    setTimeout(function () {
      _this._parentEl.removeChild(_this._parentEl.childNodes[0])
    }, 1000 * NOTIFICATION_TIMEOUT)
  }
}

export default new NotifyView()
