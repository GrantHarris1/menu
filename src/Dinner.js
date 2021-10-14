import axios from 'axios';
import React from 'react';
class Dinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
    }

    componentDidMount() {


        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/5')
            .then(res => {
                // handle result
                this.setState({
                    menuItems: res.data

                })
                console.log(res)
            })

    };

    render() {
        console.log(this.state.menuItems)

        return (
            <div>
                <h3>For Dinner:</h3>
                {this.state.menuItems.map((item, index)=>{
                    return(
                        <div key = {index}>
                            <p>
                                {item.name}
                            </p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Dinner;