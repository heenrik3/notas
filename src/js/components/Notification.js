export function Notification(_this) {
  return `<div class="notification__item ${_this._data.type}">
      <div class="notification__icon">
          <i class="fas fa-${
            _this._data.type === 'success'
              ? 'check-circle'
              : 'exclamation-triangle'
          }"></i>
        </div>
      <span class="notification__text ">${_this._data.message}</span>
    </div>`
}
