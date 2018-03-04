
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

var font=new Array(
  ['sans-serif'],
  ['roboto'],
  ['Helvetica'],
  ['cursive'],
  ['Calibri']
);
function getRandomFont() {
  var index=Math.floor((Math.random()*font.length));
  var family =font[index][0];
  return family;
}

class Box extends React.Component {
  render(){
    return (
      <div className="Box" style={{backgroundColor: getRandomColor(),color:getRandomColor(),borderColor:getRandomColor()}}>
      <p className="Text" style={{fontFamily:getRandomFont(),fontSize:'3em'}}>LABORATORIA</p>
      </div>    
    );
  }
}
ReactDOM.render(<Box/>, document.getElementById('app'));