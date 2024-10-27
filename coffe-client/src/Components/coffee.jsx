import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffee = ({coffeel ,setallcoffee,allcoffee}) => {
    const {_id,name ,quantity,supplier,taste,Category,Details,photo} = coffeel;
    const handledelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method : 'DELETE',
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0)
                {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remaining = allcoffee.filter(cof => cof._id !==_id);
                      setallcoffee(remaining);

                }
            })
            }
          });

    }
  return (
    <div className="mt-5">
        <h1>{name}</h1>
        <h1>{quantity}</h1>
        <h1>{supplier}</h1>
        <h1>{taste}</h1>
        <h1>{Category}</h1>
        <h1>{Details}</h1>
        <h1>{photo}</h1>
        <button className="btn">view</button>
        <Link to={`/update/${_id}`}> <button className="btn">edite</button></Link>
        <button onClick={()=>handledelete(_id)} className="btn bg-orange-500">delete</button>
    </div>
  )
}

export default Coffee;