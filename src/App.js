import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleCoverChange = this.handleCoverChange.bind(this);

    this.fileInput = React.createRef();
    this.state = {
      title: '',
      genre: '',
      description: '',
      cover:''
    }
  }

  handleTitleChange(e) {
    const newValue = e.currentTarget.value;
    this.setState({
      title: newValue
    });
  }
  handleDescriptionChange(e) {
    const newValue = e.currentTarget.value;
    this.setState({
      description: newValue
    });
  }
  handleGenreChange(e) {
    const newValue = e.currentTarget.value;
    this.setState({
      genre: newValue
    });
  }
  handleCoverChange() {
    const fr = new FileReader();
    const myCover = this.fileInput.current.files[0];
    fr.addEventListener('load', () => {
      this.setState({
        cover: fr.result
      })  
    });
    fr.readAsDataURL(myCover);
    
  }
  

  render() {
    return (
      <div className="wrapper">
        <form className="form">
          <div className="form__row">
            <label htmlFor="movie-name" className="form__label">Nombre</label>
            <input name="movie-name" id="movie-name" type="text" className="form__field form__field--text" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div className="form__row">
            <label htmlFor="movie-description" className="form__label">Descripción</label>
            <textarea name="movie-description" id="movie-description" type="text" className="form__field form__field--textarea" onChange={this.handleDescriptionChange} defaultValue={this.state.description}></textarea>
          </div>
          <div className="form__row">
            <label htmlFor="movie-genre" className="form__label">Género</label>
            <select name="movie-genre" id="movie-genre" className="form__field form__field--select" value={this.state.genre} onChange={this.handleGenreChange}>
              <option value="">Selecciona un género</option>
              <option value="comedy">Comedia</option>
              <option value="drama">Drama</option>
              <option value="family">Infantil</option>
            </select>
          </div>
          <div className="form__row">
            <label htmlFor="movie-cover" className="form__label">Carátula</label>
            <input name="movie-cover" id="movie-cover" type="file" className="form__field form__field--file" ref={this.fileInput} onChange={this.handleCoverChange} />
          </div>
        </form>  
        <ul className="movies">
          <li className="movie">
            <img className="movie__cover" src={this.state.cover} alt={this.state.title}/>
            <small className="movie__genre">{this.state.genre}</small>
            <h2 className="movie__title">{this.state.title}</h2>
            <p className="movie__description">{this.state.description}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
