<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SimpleESl</title>
    <meta name="description" content="SimplESL">
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  </head>
  <body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <!-- AR.js example, works fine
          <a-entity
          position="0 0 0"
          scale="0.05 0.05 0.05"
          gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        >
        </a-entity>-->
        <!-- my example, doesn't work
        <a-entity
          position="0 0 0"
          scale="1 1 1"
          gltf-model="assets/scene.gltf">
        </a-entity>-->
        <!-- same model, trying url instead of path to 'assets' folder, doesn't work also-->
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpigeonsv3?v=1605718422138"
        ></a-entity>
      </a-marker>
      <a-marker preset="kanji">
        
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Ftwigs.glb?v=1601432162550"
        ></a-entity>
      </a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt3.1.patt?v=1601438025681'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fcage.glb?v=1601435865700"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-pattern5.patt?v=1603260109822'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fveggies%20(4).glb?v=1605717812528"
        ></a-entity>
		</a-marker>
      
    <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-pattern6.patt?v=1603261099476'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fcondiments-2.glb?v=1605718733792"
        ></a-entity>
		</a-marker>
    
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-pattern7.patt?v=1603261918310'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2FStew-2.glb?v=1605718617235"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-pattern8.patt?v=1603266873495'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fstove%20(1).glb?v=1603267074109"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-pattern9.patt?v=1603267673504'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2FBIGGERtv.glb?v=1603859174742"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt11.patt?v=1603859803202'>
     
        <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fvolcano%20(2).glb?v=1605717933211"
        ></a-entity>
		</a-marker>
      
    
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt12.patt?v=1603860291656'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2FISLANDv2.glb?v=1605716948710"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt13.patt?v=1603860992273'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fprison%20(2)%20(1).glb?v=1603861152213"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt14.patt?v=1603861282838'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2FPlayground%20(1).glb?v=1605717366252"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt15.patt?v=1603861390187'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fstem%20(1).glb?v=1605718065562"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt16.patt?v=1603861490501'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fcroissant(2).glb?v=1603861640350"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt17.patt?v=1603861726370'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Ffirewood%20(1).glb?v=1603861729130"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt18.patt?v=1603861843133'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2FMonuments.glb?v=1603861846818"
        ></a-entity>
		</a-marker>
      
      <a-marker preset='custom' type= 'pattern' url='https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Fpattern-patt19.patt?v=1603861954573'>

      <a-entity
          position="0 1 0"
          scale="0.01 0.01 0.01"
          gltf-model="https://cdn.glitch.com/ec23b9d0-a5d3-437d-850e-1d6d8a51fecb%2Felephant%20(2).glb?v=1603862413486"
        ></a-entity>
		</a-marker>
      
      
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
