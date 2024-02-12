import { Component } from 'react';
import image from './marche.jpg';
import imageTwo from './alimentation.jpg';
import Swal from 'sweetalert2';



export class Shopping extends Component {
    
    state = {
     shopping: [ ],
     userInput: ''

    }

onChangeEvent(e) {
    this.setState({userInput: e});
}
showAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ajoutez au moins un élément SVP!",
      })
}

addItem(input) {
    if (input === '') {
     this.showAlert()
    } else {
        let listArray = this.state.shopping;
        listArray.push(input);
        this.setState({shopping: listArray, userInput: ''})
    }
    
}

deleteItem() {
    let listArray = this.state.shopping;
    listArray = [];
    this.setState({shopping: listArray});
}

 crossWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');

 }

 onFormSubmit(e){
    e.preventDefault();

 }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    
                    
      <img className='imageOne' src= {image} alt='marche' width="250px"/> 
                </div>
                <div className='container'>
                    
                <h1>Liste de courses</h1>
                </div>
            <div className='container'>
                <input placeholder= "Qu'acheter aujourd'hui ?" type='text' onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
            <div className='container'>
                <button className='btnOne' onClick = {()=> this.addItem(this.state.userInput)} >Ajouter</button>
            </div>
            <div className='container'>
               <ul>
                {this.state.shopping.map((item , index) => (
                    <li  onClick ={this.crossWord} key={index}> {item} </li>
               ) ) }
               </ul>
            </div>
            <div className='container'>
                <button className='btnTwo' onClick = {() => this.deleteItem()}>Supprimer</button>
            </div>
            <div className='container'>
            <img className='imageTwo' src= {imageTwo} alt= 'alimentation' width="250px"/>
            </div>
            </form>
            </div>
        )
        
    }

}