function generateSingleStanza(number) {
  let bottle = "";
  let bottleOne = "";
  if (number - 1 <= 20 && number - 1 >= 10) {
    bottleOne = "бутылок";
  } else if ((number - 1) % 10 == 1) {
    bottleOne = "бутылка";
  } else if ((number - 1) % 10 >= 2 && (number - 1) % 10 <= 4) {
    bottleOne = "бутылки";
  } else {
    bottleOne = "бутылок";
  }

  if (number <= 20 && number >= 10) {
    console.log(
      `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${
        number - 1
      } ${bottleOne} пива на стене!`
    );
  } else if (number % 10 == 1) {
    console.log(
      `${number} бутылка пива на стене, ${number} бутылка пива!\nВозьми одну, пусти по кругу, ${
        number - 1
      } ${bottleOne} пива на стене!`
    );
  } else if (number % 10 >= 2 && number % 10 <= 4) {
    console.log(
      `${number} бутылки пива на стене, ${number} бутылки пива!\nВозьми одну, пусти по кругу, ${
        number - 1
      } ${bottleOne} пива на стене!`
    );
  } else {
    console.log(
      `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${
        number - 1
      } ${bottleOne} пива на стене!`
    );
  }
}
function generateSongText(number) {
  for (let i = number; i >= 1; i--) {
    generateSingleStanza(i);
  }
}
generateSongText(99);
