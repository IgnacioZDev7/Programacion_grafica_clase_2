
const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);


const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

//rectangulo
const geometría = new THREE.PlaneGeometry(100, 100); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
escena.add(rectángulo);

//cubo
const geometríaCubo = new THREE.BoxGeometry(80, 80, 80);
const materialCubo = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const cubo = new THREE.Mesh(geometríaCubo, materialCubo);
//posicion a la derecha
cubo.position.x = 150;
escena.add(cubo);

//esfera
const geometríaEsfera = new THREE.SphereGeometry(50, 32, 32);
const materialEsfera = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const esfera = new THREE.Mesh(geometríaEsfera, materialEsfera);
//posicion a la izquierda
esfera.position.x = -150; 
escena.add(esfera);

function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;  
    //rotacion cubo en x
    cubo.rotation.x += 0.02; 
    //rotacion cubo en y
    cubo.rotation.y += 0.015; 
    //rotacion esfera en x
    esfera.rotation.x += 0.03; 
    //rotacion esfera en z
    esfera.rotation.z += 0.02; 
    renderizador.render(escena, camara);
}

animacion();

window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});