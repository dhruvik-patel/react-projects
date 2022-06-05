import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.inputRef)
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <h3>Ref Tutorial</h3>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default Refs



// // SECOND APPROACH (OLD)


// import React, { Component } from 'react'

// class Refs extends Component {
//     constructor(props) {
//         super(props)

//         this.cbRef = null
//         this.setcbRef = (element) => {
//             this.cbRef = element
//         }
//     }

//     componentDidMount() {
//         console.log(this.cbRef)
//         this.cbRef.focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.setcbRef} />
//             </div>
//         )
//     }
// }

// export default Refs
