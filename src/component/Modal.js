import React from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'

class Maodal extends React.Component {
  state = { 
    name:'',
    img:'',
    star:3,
    visible: false 
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div className="modal">
        <Button type="primary" onClick={this.showModal}>
          Add movie
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={()=>{this.handleOk();
            this.props.add(this.state.img,
            this.state.name,
            this.state.star
            )
          }}
          onCancel={this.handleCancel}
        >
         <form className="formAdd">
                       <span>Name: </span> <input type="text" placeholder="Enter Name" name='name' onChange={this.handleChange} value={this.state.name}/>
                       <span>Rating: </span><input type="text" placeholder="Enter Rating" name='star' onChange={this.handleChange} value={this.state.star}/>
                       <span>Image URL </span><input type="text" placeholder="Enter Image URL" name='img' onChange={this.handleChange} value={this.state.img}/>
                   </form>
               
           <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>
               
        </Modal>
      </div>
    );
  }
}
export default Maodal;