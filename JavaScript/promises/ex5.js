let ms = timeInMiliseconds();
function downloadFile(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 3000) {
      resolve("File downloaded successfully");
    } else {
      reject("Download timed out.");
    }
  });
}

function timeInMiliseconds() {
  return Math.ceil(Math.random() * 5000);
}

downloadFile(ms)
  .then((message) =>
    console.log(`${message} in ${Math.round(ms / 1000)} seconds.`)
  )
  .catch((error) => {
    console.log(error);
  });
