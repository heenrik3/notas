const placeholderData = [
  'seria bom lembrar de...',
  'tenho que...',
  'preciso de...',
  'está faltando...',
  'semana que vem tenho...',
]

const template = `<div class="note %COLOR%" id="%ID%">
<textarea class='note__input' placeholder="%PLACEHOLDER%"></textarea>
<div class='note__action'>
<button class='note__btn note__save'>
    <i class="fas fa-save"></i>
</button>
<button class='note__btn note__delete'>
    <i class="fas fa-trash-alt"></i>
</button>
</div>
</div>`

export function Note(data) {
  const position = Math.round(Math.random() * placeholderData.length - 1)

  const placeholder = placeholderData[position < 0 ? position + 1 : position]

  const note = template
    .replace('%COLOR%', data['color'])
    .replace('%ID%', data['id'])
    .replace('%PLACEHOLDER%', placeholder)

  return note
}
