export default function Error(props) {
    return (
        <div id='error'>
            <h3>Error</h3>
            <h4>Se ha producido un error</h4>
            <h5>Descripción: Obtenido error al llamar al API. Código {props.cosa.cod}</h5>
            <h5>Mensaje del servidor: {props.cosa.message}</h5>
        </div>
    )
}