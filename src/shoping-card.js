function ShoppingCard(props) {
    return (
      <div onClick={() => alert('abc')} style={{ width: '100px', height: '200px', display: 'flex', flexDirection: 'column' ,marginRight: '20px', marginBottom: '20px'}}>
        <div style={{flex: 2, background: 'green'}}> 

        </div>
        <div style={{flex: 1}}> 
            <div> 
                {
                    props.name
                }
            </div>
            <div> 
                {
                    props.manufacturer
                }
            </div>
            <div> 
                {
                    props.sold
                }
            </div>
        </div>
      </div>
    );
}

export default ShoppingCard