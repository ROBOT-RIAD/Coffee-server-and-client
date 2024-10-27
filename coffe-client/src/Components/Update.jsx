import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const Update = () => {
const coffee = useLoaderData();
const {_id,name ,quantity,supplier,taste,Category,Details,photo} = coffee;
const handlupdatecoffe =e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste= form.taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const photo = form.photo.value;

    const updatecoffee = {name ,quantity,supplier,taste,Category,Details,photo};
    console.log(updatecoffee);
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method: "PUT",
      headers:{ 'content-type': 'application/json'},
      body: JSON.stringify(updatecoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title:"success",
          text:"update coffee",
          icon:"success",
          confirmButtonText:"Cool"
        })
      }
    });

  }


  return (
    <div className="bg-[#f4f3f0] p-24">
    <h1 className="text-3xl font-bold">update Coffe</h1>
    <form  onSubmit={handlupdatecoffe}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">What is your name?</span>
        </div>
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">quantity</span>
        </div>
        <input
          type="text"
          name="quantity"
          defaultValue={quantity}
          placeholder="quantity"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">supplier</span>
        </div>
        <input
          type="text"
          name="supplier"
          defaultValue={supplier}
          placeholder="supplier"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">taste</span>
        </div>
        <input
          type="text"
          name="taste"
          defaultValue={taste}
          placeholder="taste"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <input
          type="text"
          name="Category"
          defaultValue={Category}
          placeholder="Category"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Details</span>
        </div>
        <input
          type="text"
          name="Details"
          defaultValue={Details}
          placeholder="Details"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Photo url</span>
        </div>
        <input
          type="text"
          name="photo"
          defaultValue={photo}
          placeholder="Details"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <input type="submit" value="add coffe" className="btn " />
    </form>
  </div>
  )
}

export default Update