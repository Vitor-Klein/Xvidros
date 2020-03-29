import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'

export default class Detail extends Component {
    state = {
        product: {},   
    };

    async componentDidMount() {
        const { id } = this.props.match.params
        
        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    render() {
        const { product } = this.state

        return(
            <div className="product-info">
                <article>
                    <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p><a href={product.url}>Ir para a loja</a> </p>
               
                </article>
            </div>
        )
    }   
}
