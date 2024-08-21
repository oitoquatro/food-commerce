export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔 '
      case 'pizza':
      return '🍕 '
      case 'bebidas':
      return '🍹 '
      case 'sobremesas':
      return '🍧'
      default:
        return '😒🔎 '
  }
}
