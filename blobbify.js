// // async function dataURLtoBlob(dataURL) {
// //   const canvas = document.createElement("canvas");
// //   const context = canvas.getContext("2d");
// //   const base_image = new Image();
// //   base_image.src = "tiles/0/0/0.png";
// //   base_image.onload = function () {
// //     context.drawImage(base_image, 0, 0);
// //   };
// //   const r = await fetch("http://localhost:5500/tiles/0/0/0.png");
// //   const blobby = await r.blob();
// //   const sendBlob = canvas.toDataURL().split(",")[1];
// //   const formData = new FormData();
// //   //   var reader = new FileReader();
// //   //   reader.readAsArrayBuffer(blobby);
// //   //   reader.onload = async (event) => {
// //   //     console.log("Sent", event.target.result.byteLength, " byte");
// // //   fetch("https://vivacious-magenta.cmd.outerbase.io/image-data-insert", {
// // //     method: "PUT",
// // //     headers: {
// // //       "content-type": "application/json",
// // //     },
// // //     body: `{
// // //         "imageData":${sendBlob}",
// // //     "name":"Caleb Example.png"
// // // }`,
// //   });
// //     const response = await fetch(
// //       "https://vivacious-magenta.cmd.outerbase.io/image-data-insert",
// //       {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //         },
// //         body: JSON.stringify({
// //           imageData: {
// //             type: "Buffer",
// //             data: [...new Uint8Array(event.target.result)],
// //           },
// //           name: "test.png",
// //         }),
// //       }
// //     );
// //     console.log(await response.json());
// //   };

// //   const shit = document.getElementById("shit");
// //   const img = document.createElement("img");
// //   img.src = URL.createObjectURL(blob);
// //   img.style.width = "500px";
// //   img.style.height = "500px";
// //   shit.appendChild(img);
// //   const byteString = atob(dataURL.split(",")[1]);
// //   const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
// //   const ab = new ArrayBuffer(byteString.length);
// //   const ia = new Uint8Array(ab);
// //   for (let i = 0; i < byteString.length; i++) {
// //     ia[i] = byteString.charCodeAt(i);
// //   }
// //   return new Blob([ab], { type: mimeString });
// // }
// // (async () => {
// //   await dataURLtoBlob("http://localhost:5500/tiles/0/0/0.png");
// // })();
function hexToBase64(hexstring) {
  return btoa(
    hexstring
      .match(/\w{2}/g)
      .map(function (a) {
        return String.fromCharCode(parseInt(a, 16));
      })
      .join("")
  );
}

// (async () => {
//   const img = document.createElement("img");
//   const data = await fetch(
//     // "https://vivacious-magenta.cmd.outerbase.io/888"
//     "https://vivacious-magenta.cmd.outerbase.io/get-tile-v7?x=6&y=4&z=9"
//   );

// const response = await data.text();
// const imageElement = document.getElementById("shit");
// imageElement.src = response.replace(/"/g, "");
// })();

// // const blobUrl = URL.createObjectURL(blob);
// console.log(blobUrl);
