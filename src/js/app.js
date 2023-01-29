// TODO: write your code here
export default function healthStatus(object) {
  let message;

  if (+object.health > 50) {
    message = 'healthy';
  } else if (+object.health > 15 && +object.health <= 50) {
    message = 'wounded';
  } else if (+object.health < 15) {
    message = 'critical';
  }
  return message;
}
