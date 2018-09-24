import React, {Component} from 'react';
import $ from 'jquery';

class Info extends Component{
  constructor(props){
    super(props);
    this.state = {
      video: ""
    }
    this.handleVideo = this.handleVideo.bind(this);

  }

  handleVideo(e) {
    e.preventDefault();
    this.setState({
      video: e.target.value
    });
  }


    //    <div>
      // <iframe width="400" height="315" src="https://www.youtube.com/embed/78ii7obZtQ4" frameborder="9" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    // </div>
    //   fetch("http://localhost:3000/items", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name: name,
    //       description: description,
    //       price: price,
    //       category: category,
    //       email: email,
    //       vendor: vendor
    //     }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //
    //     .catch(error => console.error("Error:", error));
    //     alert('Tu producto ha sido enviado con éxito');
    //     // event.preventDefault(); //esto está todo roto
    // }

  render() {
    return (
       <body className ="infone">
        <center>
          <header>
             <h1>Lenguaje del gato</h1>
          </header>

          <div><img src="https://www.notigatos.es/wp-content/uploads/2013/06/lenguaje-cola-gatos21.jpg" alt="aquí van imagenes de perritos bien cute" /></div>
          <h2>Que dice tu cola de gato: qué significan los movimientos y las posiciones del apéndice más intrigante de su gato.</h2>

        <h3>Posición: levantada. </h3>
        <div><img width="400" height="310" src="http://www.ideasparamascotas.com/wp-content/uploads/2016/04/cola-1.gif" alt="aquí van imagenes de perritos bien cute" /></div>
         <p>Si tu gato se mueve tranquilamente por su territorio con la cola levantada, quiere decir que se siente confiado y contento.
          Una cola erguida expresa felicidad y una actitud amigable.
          Fíjate en el final de la cola cuando la lleva levantada. Si la punta está ligeramente doblada quiere decir que se siente intensamente feliz.</p>

        <h3>Posición: curvada como un signo de interrogación.</h3>
         <div><img width="400" height="310" src="https://www.curiosfera.com/wp-content/uploads/2017/10/mi-gato-mueve-la-cola-cuando-le-acaricio.jpg" alt="aquí van imagenes de perritos bien cute" /></div>
         <p>Tu gato te está preguntando si te apetece tomarte un descanso en tu ajetreada vida para jugar con él. Esta posición suele indicar una actitud juguetona y que tu gato está deseando compartir un rato de diversión contigo.</p>

        <br/>
        <h3>Posición: escondida. </h3>
         <div>
           <img width="400" height="310" src="https://d32xvgr96w2oxp.cloudfront.net/2018/02/chat-queue-2018.jpg" alt="aquí van imagenes de perritos bien cute" /></div>
         <p> "Una cola enrollada bajo el cuerpo significa miedo o sumisión. Algo está poniendo nervioso a tu gato."</p>
        <h3>Posición: erizada. </h3>
         <div>
           <img width="400" height="310" src="https://www.notigatos.es/wp-content/uploads/2012/03/gato_enfadado.jpg" alt="aquí van imagenes de perritos bien cute" /></div>

        <p>Una cola que parece una escobilla limpiadora indica un gato muy agitado y asustado, que eriza la cola intentando parecer más grande para afrontar un peligro.</p>
        <h3>Posición: movimiento vigoroso.</h3>
        <div><img width="400" height="310" src="https://www.curiosfera.com/wp-content/uploads/2017/10/cuando-un-gato-mueve-la-cola-que-significa.jpg" alt="aquí van imagenes de perritos bien cute" /></div>

        <p> Una cola que se agita adelante y atrás indica una combinación de miedo y agresividad. Debes interpretarlo como una advertencia para guardar las distancias.</p>
        <h3>Posición: balanceo. </h3>
        <div><img width="400" height="310" src="http://infovirales.com.ar/wp-content/uploads/2017/07/Sin-t%C3%ADtulo-2-4-678x381.jpg" alt="aquí van imagenes de perritos bien cute" /></div>

        <p>Una cola que oscila lentamente de lado a lado normalmente significa que tu gato está concentrado en un objeto. Probablemente lo verás adoptar esta posición justo antes saltar sobre un juguete o atrapar una croqueta de alimento que se ha caído fuera del cuenco.</p>
        <h3>Posición: enroscada alrededor de alguien. </h3>
        <div><img src="http://www.whycatwhy.com/wp-content/uploads/2016/01/cat-tail-cuddle-300x224.jpg" alt="aquí van imagenes de perritos bien cute" /></div>

        <p>Cuando tu gato envuelve a otro gato con la cola es como cuando tú le pones el brazo en la espalda a alguien. Significa amistad. </p>
          </center>
       </body>
    );
  }
}

export default Info;
