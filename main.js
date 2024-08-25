let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(500)
  .typeString('Física, fotógrafa y desarrolladora Web Jr.')
  .pauseFor(1500)
  .deleteChars(10)
  .start();
