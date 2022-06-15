// Get all the images
image_array = [
  'tarot-chariot.jpg',
  'tarot-death.jpg',
  'tarot-devil.jpg',
  'tarot-emperor.jpg',
  'tarot-empress.jpg',
  'tarot-fool.jpg',
  'tarot-hangedman.jpg',
  'tarot-hermit.jpg',
  'tarot-hierophant.jpg',
  'tarot-highpriestess.jpg',
  'tarot-judgement.jpg',
  'tarot-justice.jpg',
  'tarot-lovers.jpg',
  'tarot-magician.jpg',
  'tarot-moon.jpg',
  'tarot-star.jpg',
  'tarot-strength.jpg',
  'tarot-sun.jpg',
  'tarot-temperance.jpg',
  'tarot-tower.jpg',
  'tarot-wheeloffortune.jpg',
  'tarot-world.jpg'
]

function get_random_image() {
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length)

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./img/${selected_image}`
}
