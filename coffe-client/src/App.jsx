
import "./App.css";
import Swal from "sweetalert2";

function App() {


  const handleaddcoffe =e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste= form.taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const photo = form.photo.value;

    const newcoffee = {name ,quantity,supplier,taste,Category,Details,photo};
    console.log(newcoffee);
    fetch('http://localhost:5000/coffee',{
      method: "POST",
      headers:{ 'content-type': 'application/json'},
      body: JSON.stringify(newcoffee)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title:"success",
          text:"add coffee",
          icon:"success",
          confirmButtonText:"Cool"
        })
      }
    });

  }


  return (
    <>
      <div className="bg-[#f4f3f0] p-24">
        <h1 className="text-3xl font-bold">ADD Coffe</h1>
        <form onSubmit={handleaddcoffe}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              name="name"
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
              placeholder="Details"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <input type="submit" value="add coffe" className="btn " />
        </form>
      </div>
    </>
  );
}

export default App;
