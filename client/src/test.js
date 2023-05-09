import QRCode from "qrcode";

function testQR() {
    var canvas = document.getElementById('canvas')
    
    function test () {
        QRCode.toCanvas(canvas, 'https://www.npmjs.com/package/qrcode#usage', function (error) {
            if (error) console.error(error)
            console.log('success!');
          })
    }
    
  return (<>
    <canvas id="canvas"></canvas>

<script src="/build/qrcode.js"></script>
<script>{QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
    if (error) console.error(error)
    console.log('success!');
  })}
  
</script>
  </>);
}

export default testQR;
