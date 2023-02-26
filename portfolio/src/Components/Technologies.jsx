import React, { Component } from "react";
import styled from "styled-components";


export default class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: this.props.skill,
            cert: this.props.cert,
            img: this.props.skill,
            mostrarSkill: false,
        }
    }

    

    CambiarEstado= ()=>{
        this.setState({
            mostrarSkill : !this.state.mostrarSkill,
            img: this.state.mostrarSkill ? this.state.skill : this.state.cert
        })

    }
    render() {
        return (
            <CertAndTec>
                <div className="card">
                    <div className="card-side">
                        <img src={this.state.img} />
                    </div>
                        <button style={this.state.mostrarSkill ? btnCert:btnSkill} onClick={this.CambiarEstado}>{this.state.mostrarSkill ? "Skill":"Certificación"}</button>
                </div>
            </CertAndTec>
        )
    }
}

const btnCert = {
    backgroundColor: "#6A6A8A",
    color: "white",
}
const btnSkill = {
    backgroundColor: "white",
    color: "#6A6A8A",
    border: "solid 2px #6A6A8A"
}
const CertAndTec = styled.div`

.card {
    width: 100%;
    max-width: 15em;
    heigth: 5em;
    float: left;
    margin-top: 2em;
    align-items: center;   
    & img{
        width: 10em;
    }
}
.card-side {
    padding: 2em;
    max-width: 80%;
    margin: 0 auto;
    height: 6em;
    display: flex;
    margin-top: 1em;    
}
/* .card-image{
    width: 10em;
} */
button{
    cursor: pointer;
    width: 10em;
    height: 2.5em;
    margin: .75em;
    margin-left: 3.5em;
    border: none;
    &:hover{
        font-weight: bold;
    }
}
`
