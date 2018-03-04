
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
 
  return color;
  
window.setTimeout(getRandomColor, 1000)
}

class Box extends React.Component {
  render(){
    return (
      <div className="Box" style={{backgroundColor: getRandomColor()}}>
      <p>LABORATORIA</p>
      </div>
      
          
    );
  }
}
ReactDOM.render(<Box/>, document.getElementById('app'));