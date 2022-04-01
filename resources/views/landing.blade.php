<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing</title>
    <link rel="stylesheet" href="../css/app.css">
<style>
    #video {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
    }

    .flex-container {
        height: 100vh;
        width: 100%;
        display: flex;
        background-color: black;
        position: relative;
        overflow: hidden;
    }

    #controlModel {
        z-index: 99999;
    }

    .translate-middle {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1,
    h2 {
    color: white;
    }
</style>
</head>
<body>
<div class="flex-container">
    <div id="controlModel" class="position-relative w-100">
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="text-center">Thomas Bockhorn</h1>
        <h2 class="text-center mb-4">Full Stack Web Developer</h2>
        <button id="launch" class="btn btn-danger btn-lg">Launch</button>
      </div>
    </div>
    <div class="videoPlayer d-flex">
      <video
        muted
        id="video"
        class="position-absolute top-50 start-50 translate-middle"
      >
        <source src="{{ URL::asset("/mov/Atoms.mp4") }}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <script src="../js/app.js"></script>
  <script>
      let launch = document.getElementById('launch');
      launch.addEventListener("click", launchExplosion);

      function redirectToMainPage(){
          window.location = '/welcome';
      }

      function launchExplosion(){
        let playButton = document.getElementById("video");
        let controlModel = document.getElementById("controlModel");

        controlModel.style.display = "none";
        playButton.play();
        setTimeout(() => redirectToMainPage(), 10000);
      }
  </script>
</body>
</html>