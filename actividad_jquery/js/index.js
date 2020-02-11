//////////////////////////////////////////
//////////////////////////////////////////
//Objeto con todos los contenidos que emulan las peticiones al servidor. 
//////////////////////////////////////////
//////////////////////////////////////////
const content = {
    /* Videos de la aplicacion */
    videos:[
        {titulo:"Video-1",desc:"Esto es una descripcion dinamica de un video en concreto 1",reproducciones:"0",img:"style/img/video.jpeg"},
        {titulo:"Video-2",desc:"Esto es una descripcion dinamica de un video en concreto 2",reproducciones:"1355",img:"style/img/video.jpeg"},
        {titulo:"Video-3",desc:"Esto es una descripcion dinamica de un video en concreto 3",reproducciones:"1986723",img:"style/img/video.jpeg"},
        {titulo:"Video-4",desc:"Esto es una descripcion dinamica de un video en concreto 4",reproducciones:"362836",img:"style/img/video.jpeg"},
        {titulo:"Video-5",desc:"Esto es una descripcion dinamica de un video en concreto 5",reproducciones:"1818",img:"style/img/video.jpeg"},
        {titulo:"Video-6",desc:"Esto es una descripcion dinamica de un video en concreto 5",reproducciones:"0",img:"style/img/video.jpeg"},
        {titulo:"Video-7",desc:"Esto es una descripcion dinamica de un video en concreto 7",reproducciones:"1355",img:"style/img/video.jpeg"},
        {titulo:"Video-8",desc:"Esto es una descripcion dinamica de un video en concreto 8",reproducciones:"1986723",img:"style/img/video.jpeg"},
        {titulo:"Video-9",desc:"Esto es una descripcion dinamica de un video en concreto 9",reproducciones:"362836",img:"style/img/video.jpeg"},
        {titulo:"Video-10",desc:"Esto es una descripcion dinamica de un video en concreto 10",reproducciones:"1818",img:"style/img/video.jpeg"},
        {titulo:"Video-11",desc:"Esto es una descripcion dinamica de un video en concreto 11",reproducciones:"0",img:"style/img/video.jpeg"},
        {titulo:"Video-12",desc:"Esto es una descripcion dinamica de un video en concreto 12",reproducciones:"1355",img:"style/img/video.jpeg"},
        {titulo:"Video-13",desc:"Esto es una descripcion dinamica de un video en concreto 13",reproducciones:"1986723",img:"style/img/video.jpeg"},
        {titulo:"Video-14",desc:"Esto es una descripcion dinamica de un video en concreto 14",reproducciones:"362836",img:"style/img/video.jpeg"},
        {titulo:"Video-15",desc:"Esto es una descripcion dinamica de un video en concreto 15",reproducciones:"1818",img:"style/img/video.jpeg"},
    
    ],
    /* Audios de la aplicacion */
    audios:[
        {titulo:"Audio-1",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"0",img:"style/img/audio.jpg"},
        {titulo:"Audio-2",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1355",img:"style/img/audio.jpg"},
        {titulo:"Audio-3",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1986723",img:"style/img/audio.jpg"},
        {titulo:"Audio-4",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"362836",img:"style/img/audio.jpg"},
        {titulo:"Audio-5",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1818",img:"style/img/audio.jpg"},
        {titulo:"Audio-6",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"0",img:"style/img/audio.jpg"},
        {titulo:"Audio-7",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1355",img:"style/img/audio.jpg"},
        {titulo:"Audio-8",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1986723",img:"style/img/audio.jpg"},
        {titulo:"Audio-9",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"362836",img:"style/img/audio.jpg"},
        {titulo:"Audio-10",desc:"Esto es una descripcion dinamica de un audio en concreto",reproducciones:"1818",img:"style/img/audio.jpg"},
    ],
    /* Contenido de las tablas de administracion */
    usuario:[ /* Alias  Email  Nombre  Apellidos Rol */
        {type:"user",item_start:13,info1:"Alias User1",info2:"",info3:"",info4:"",info5:""},
        {type:"user",item_start:19,info1:"Alias User3",info2:"",info3:"",info4:"",info5:""},
        {type:"user",item_start:25,info1:"Alias User2",info2:"",info3:"",info4:"",info5:""},
    ],
    new_video:[     /* Usuario             Nombre  Titulo  Comentarios  Categoria */
        {type:"videos",item_start:13,info1:"Video User1",info2:"",info3:"",info4:"",info5:""},
        {type:"videos",item_start:19,info1:"Video User3",info2:"",info3:"",info4:"",info5:""},
        {type:"videos",item_start:25,info1:"Video User2",info2:"",info3:"",info4:"",info5:""},
    ],
    new_audio:[ /* Género Título Autor Álbum Comentarios  */
        {type:"audios",item_start:13,info1:"Audio User3",info2:"",info3:"",info4:"",info5:""},
        {type:"audios",item_start:19,info1:"Audio User1",info2:"",info3:"",info4:"",info5:""},
        {type:"audios",item_start:25,info1:"Audio User2",info2:"",info3:"",info4:"",info5:""},
    ]
}

/*  Formularios dinamicos los cuales se ubicaran en las paginas de administracion de usuarios, videos u audios. 
    Los formularios obtienen por props el texto de los elementos a editar y el elemento entero. Los values seran el texto del input
    y con el prop element obtendremos el id del elemento a editar y se lo pondremos al formulario como clase para saber la procedencia
    del texto cuando este se modifique.Esta constante es llamada desde Change_to_edit. 
   Las clases make-changes y close-changes estaran a la espera de ser llamadas. Make-changes sabra a que elemento tienen
   que devolver los cambios con la clase que obtendremos del elemento: ${element[0].className} */
const edit_forms ={
    user: (values,element)=>{
        return `
            <form id="edit_info_container">
            </br></br><strong>Modificar Usuario</strong></br>
                <span>Alias:</span><input class="${element[0].id} form-input" type="text" value="${values[0]}"></input></br>
                <span>Email:</span><input class="${element[1].id} form-input" type="text" value="${values[1]}"></input></br>
                <span>Nombre:</span><input class="${element[2].id} form-input" type="text" value="${values[2]}"></input></br>
                <span>Apellidos:</span><input class="${element[3].id} form-input" type="text" value="${values[3]}"></input></br>
                <span>Rol:</span><input class="${element[4].id} form-input" type="text" value="${values[4]}"></input>
                <i class="fa fa-check make-changes ${element[0].className}"></i>
                <i class="fa fa-times close-changes"></i>
            </form>
        
        `
    },
    videos:(values,element)=>{
        return `
        <form id="edit_info_container">
        </br></br><strong>Modificar Video</strong></br>
            <span>Usuario:</span><input class="${element[0].id} form-input" type="text" value="${values[0]}"></input></br>
            <span>Nombre:</span><input class="${element[1].id} form-input" type="text" value="${values[1]}"></input></br>
            <span>Titulo:</span><input class="${element[2].id} form-input" type="text" value="${values[2]}"></input></br>
            <span>Comentarios:</span><input class="${element[3].id} form-input" type="text" value="${values[3]}"></input></br>
            <span>Categoria:</span><input class="${element[4].id} form-input" type="text" value="${values[4]}"></input>
            <i class="fa fa-check make-changes ${element[0].className}"></i>
            <i class="fa fa-times close-changes"></i>
        </form>
    
    `
    },
    audios:(values,element)=>{
        return `
        <form id="edit_info_container">
        </br></br><strong>Modificar Audio</strong></br>
            <span>Genero:</span><input class="${element[0].id} form-input" type="text" value="${values[0]}"></input></br>
            <span>Titulo:</span><input class="${element[1].id} form-input" type="text" value="${values[1]}"></input></br>
            <span>Autor:</span><input class="${element[2].id} form-input" type="text" value="${values[2]}"></input></br>
            <span>Album:</span><input class="${element[3].id} form-input" type="text" value="${values[3]}"></input></br>
            <span>Comentarios:</span><input class="${element[4].id} form-input" type="text" value="${values[4]}"></input>
            <i class="fa fa-check make-changes ${element[0].className}"></i>
            <i class="fa fa-times close-changes"></i>
        </form>
    
    `
    }

}

/* Create_ dinamically crea la lista de los videos y audio de toda la aplicacion. Para ello obtenemos el tipo de dato que
vamos a tratar (video o audio) y el contenedor objetivo al que le indexaremos el html resultante. */
const create_dinamically = (type,container) =>{
    /* Crearemos un objeto con la pagina y la miniatura de la lista */
    let info = {pagina:"",miniature_class:""}
    /* Dependiendo del tipo el objeto anterior lo mutaremos con los datos necesarios */
    if(type=="audios" ){
        info.pagina="pagina16.html"  //url de la pagina de destino
        info.miniature_class = "audio_miniature" //clase de la miniatura
    }else{
        info.pagina="pagina15.html" 
        info.miniature_class = "video_miniature"
    }

    let html = ``//variable que contendra todo el html dinamico
    /* Seleccionamos del objeto de content el indice que corresponde al prop type que recibe la constante. Entonces
    obtenemos el array por el cual iteraremos para obtener los datos de los videos/audios que pintaremos de forma dinamica */
    content[type].forEach(element => {
        html +=`<div class="my_${type}">
                    <a href="${info.pagina}?${type}?${element.titulo}">
                        <img class="${info.miniature_class}" src="${element.img}" alt="No image">
                        <div class="titulo">${element.titulo}</div>
                        <div class="visualizaciones">${element.reproducciones} <br><strong>Hace 0 dias</strong></div>
                    </a>
                </div>`
    });
    /* Hacemos el append del string generado al contenedor recibido por props */
    $(container).append(html)
}

/* Create_heredated_data se encarga de pintar el details del video/audio seleccionado. Para ello recibe de props
la url actual y la divide en dos secciones, el tipo de datos y el titulo del video o audio */
const create_heredated_data = (data) =>{
    var info = data.split('?'); //cortamos la url obtenida en trozos teniendo como corte el ?
    let html = `` //contenedor del html dinamico
    /* En esta variable guardaremos el objeto resultante de la siguiente operacion: */
    let multimedia_data=content //objeto
                        [info[1]]//el item que indica el tipo de informacion indica a su vez el indice el objeto que contiene el resultado deseado
                        [content[info[1]].findIndex(x => x.titulo === info[2])]
                        /* Finalmente obtenemos el indice del array del objeto que contiene e titulo que deseamos mostrar */
/* Con el objeto resultante de la operacion anterior generaremos los siguientes html dinamicos */
    info[1] == "videos"
        ? html =   `
                <div><video src="./multimedia/video.mp4" controls>
                    Your browser does not support the video tag.
                </video></div>
                <div id="title">${multimedia_data.titulo}</div>
                <div>${multimedia_data.desc}</div>
                <div id="views">${multimedia_data.reproducciones} visualizaciones</div>
                `
        : html = `
                <div> <img src="${multimedia_data.img}" alt="audio"></div>
                <div><audio src="./multimedia/audio.mp3" controls>
                        Your browser does not support the audio tag.
                    </audio></div>
                <div id="title">${multimedia_data.titulo}</div>
                <div>${multimedia_data.desc}</div>
                <div id="views">${multimedia_data.reproducciones} visualizaciones</div>`

    $('#detail-grid-container').append(html) //Hacemos el append al id que se encontrara en ambas paginas
}
/* Con esta constante funcional crearemos nuevas entradas en las paginas de administracion de usuarios/videos/audios.
Los props indican el tipo de resultado a generar y el resultado deseado.
*/
const create_new_result = (type,result) => {
    let item = content[type][result] //Obtenemos el objeto que coincide con los dos indices obtenidos por props
    return `
        <div class="sub-family-${item.item_start}" id="${item.item_start}">${item.info1}</div>
        <div class="sub-family-${item.item_start}" id="${item.item_start+1}">${item.info2}</div>
        <div class="sub-family-${item.item_start}" id="${item.item_start+2}">${item.info3}</div>
        <div class="sub-family-${item.item_start}" id="${item.item_start+3}">${item.info4}</div>
        <div class="sub-family-${item.item_start}" id="${item.item_start+4}">${item.info5}</div>
        <div class="sub-family-${item.item_start} container" id="${item.item_start+5}"> 
            <i class="far fa-edit edit-sub-family sub-family-${item.item_start} ${item.type}"></i>
            <i class="fa fa-trash delete-sub-family sub-family-${item.item_start}"></i>
        </div>
    
    `
}
/* Change to edit se encarga de obtener la informacion necesaria para que edit_forms reciba esta de una forma correcta y asi
al obtener el hml resultane de este, se pueda hacer el append de forma correcta */
const change_to_edit = (elements,type) =>{
    
    let values = [ /* Obtenemos el texto de los elementos obtenidos por props */
        $(`#${elements[0].id}`).text(),
        $(`#${elements[1].id}`).text(),
        $(`#${elements[2].id}`).text(),
        $(`#${elements[3].id}`).text(),
        $(`#${elements[4].id}`).text()
    ]
    $("#edit_form_container").append(edit_forms[type](values,elements))
}
$(window).on("load",()=>{
    let show_results = false; //Creamos una Variable semaforo para controlar si el formulario de edicion de video/audio/user esta abierto
    let results = 0;//Variable que contiene los elementos audio/video/user que hemos creado o borrado

    /* Si el elemento con el id de audio_container existe llamamos a que se cree de forma dinamica la lista de audios
    pasando como parametros que queremos crear y el contenedor que lo va ha recibir todo */
    $("#audio_container").length !=0 
        ? create_dinamically("audios","#audio_container")
        : ""
    /* Si el elemento con el id de video_container existe llamamos a que se cree de forma dinamica la lista de videos
    pasando como parametros que queremos crear y el contenedor que lo va ha recibir todo */
    $("#video_container").length !=0 
    ? create_dinamically("videos","#video_container")
    : ""
    /* Si el elemento con el id de detail-grid-container existe llamamos a que se cree de forma dinamica el detalle del
    video o audio pasando como parametro el patron de busqueda de la url actual */
    $('#detail-grid-container').length !=0 
    ? create_heredated_data(window.location.search)
    :""
    /* Si el elemento que contiene la id maintenance-grid-container existe en el dom entonces asignaremos a sus respectivos
    elementos hijos los siguientes eventos */
    if($("#maintenance-grid-container").length != 0){
        $(".result").hide() //Esconderemos los elementos con la clase result
        //Si el elemento con el id show_results es clicado 
        $('#show_results').on("click",()=>{
            if(!show_results){
                $(".result").show() //mostraremos los elementos con la clase result si la variable show_results es falso
                show_results = true
            }else{
                $(".result").hide()//esconderemos los elementos con la clase result si la variable show_results es true
                show_results = false
            }
        })
        //Cuando clikemos en el elemento con el id new_result 
        $('#new_result').on("click",(e)=>{
            if(results < 3){ //si no se han creado mas de tres elementos nuevos
                /* Al siguiente id le adjuntaremos el resultado de create_new_result el cual recibira como
                parametros la primera clase del elemeto clickado y el numero de resultados creados */
                $("#maintenance-grid-container").append(create_new_result(e.target.className.split(" ")[0],results))
                results++;
            }else{
                alert("No More Data Can Be Created")
            }
            
        })
        /* Si cualquier elemento con la clase edit-sub-family creado antes o despues de que el dom se renderice, es 
        clickado */
        $('body').on('click', '.edit-sub-family',(e)=>{
            /* Si el elemento con el id edit_info_container existe lo borramos*/
            $("#edit_info_container") !== undefined ?  $("#edit_info_container").remove() : ""
            /* Posteriormente creamo el formulario de edicion de la tabla de admin de audios/videos/users
            llamando a la funcion Change_to_edit y pasandole como parametros el elemento con la cuarta clase del elemento
            objetivo y la quinta clase del elemento objetivo*/
            change_to_edit($(`.${e.target.className.split(" ")[3]}`),e.target.className.split(" ")[4])
            
        })
        /* Si cualquier elemento con la clase .delete-sub-family creado antes o despues de que el dom se renderice, es 
        clickado */
        $('body').on('click', '.delete-sub-family', (e)=>{
            /* El elemento con la tercera clase del elemento clicado es borrad del dom y se reduce en 1 el numero de elementos
            creados */
            $(`.${e.target.className.split(" ")[3]}`).remove()
            if(results !=0){
                results --
            }
    
        });
        /* Si cualquier elemento con la clase .make-changes creado antes o despues de que el dom se renderice, es 
        clickado */
        $('body').on('click', '.make-changes',(e)=>{
            /* obtenemos todos los elementos con la clase form-input con una clase en su interior */
            for (const key in $(`.form-input`)) {
                if($(`.form-input`)[key].className !== undefined){
                    /* De estos obtenemos la primera clase de estos */
                    let item = $(`.form-input`)[key].className.split(" ")[0];
                    /* El elemento con la id igual a la clase obtenida obtendra el texto que tiene dicho input */
                    $(`#${item}`).text($(`.form-input`)[key].value)
                }
            }
            $("#edit_info_container").remove() /* Eliminamos el formulario */
        })
        /* Si cualquier elemento con la clase .close-changes creado antes o despues de que el dom se renderice, es 
        clickado */
        $('body').on('click', '.close-changes',(e)=>{
            $("#edit_info_container").remove() /* Eliminamos el formulario */
        })

    }
    



})

