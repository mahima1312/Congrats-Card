const element = (
  <div className='background'>
    <h1 className='heading'>Congratulations</h1>
    <div className='cardContainer'>
      <img
        className='logo-image1'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='name'>Kiran V</h1>
      <p className='institute-name'>
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        className='logo-image2'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
