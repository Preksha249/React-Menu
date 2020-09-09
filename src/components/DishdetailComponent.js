import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    renderComments(comments) {
        const c = comments.map((comment) => {
            return (
                
                <ul className = "list-unstyled">
                <li key={comment.id}>
                    {comment.comment}</li>
                <br></br>
                -- {comment.author}, {comment.datee}
                <br></br>
                </ul>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                {c}
            </div>
        );
    }

    render() {
        if(this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                
            );
        } else {
            return (
                <div></div> 
            );
        }
    }
}

export default DishDetail;