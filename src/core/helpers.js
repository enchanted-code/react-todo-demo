/**
 * Generate a "random" id,
 * Please note this may not create truly random id's
 * @returns a generated "random" id
 */
export function getRandomId() {
  const id = Date.now().toString() + "-" + Math.floor((Math.random() * 100) + 1).toString();
  console.debug("todo id created: " + id);
  return id;
}
