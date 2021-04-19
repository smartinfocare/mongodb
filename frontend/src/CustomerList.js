import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import {api_url} from './common'

class CustomerList extends Component {

  constructor(props) {
    super(props);
    this.state = {customers: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch(`${api_url}customers`)
      .then(response => response.json())
      .then(data => this.setState({customers: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`${api_url}customer/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log("Remove Done!");
      let updatedCustomers = [...this.state.customers].filter(i => i._id !== id);
      this.setState({customers: updatedCustomers});
    });
  }

  render() {
    const {customers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const customerList = customers.map(customer => {
      return <tr key={customer._id}>
        <td style={{whiteSpace: 'nowrap'}}>{customer.firstname}</td>
        <td>{customer.lastname}</td>
        <td>{customer.age}</td>
        <td>{customer.address}</td>
        <td><a href={customer.copyrightby}>{customer.copyrightby}</a></td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="warning" tag={Link} to={"/customers/" + customer._id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(customer._id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <>

<AppNavbar/>
      <div  className="container">
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/customers/new">Add Customer</Button>
          </div>
          <h3>Customer List</h3>
          <Table className="mt-5  ">
            <thead>
              <tr>
                <th width="10%">Firstname</th>
                <th width="10%">Lastname</th>
                <th width="10%">Age</th>
                <th>Address</th>
                <th>Copyrightby</th>
                <th width="30%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {customerList}
            </tbody>
          </Table>
        </Container>
      </div>
      </>
    );
  }
}

export default CustomerList;