
const Color = ({newDate,selectedColor}) => {

      
      return (
            <div>
      <h1 style={{ color: selectedColor }}>{newDate}</h1>
            </div>
      );
};

export default Color;