import React, {useState} from "react";

type Props = {
  id: string;
}

const DropdownDetail: React.FC<Props> = ({id}) => {
  const [show,setShow]=useState(false)
  return (
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr onClick={()=>{setShow(!show)}}>
                  <td className="font-medium">Dashboards</td>
                  <td>Project Owner</td>
                </tr>
                {show&&<tr>AAA</tr>}
                <tr>
                  <td className="font-medium">Role description</td>
                  <td>Ngoc</td>
                </tr>
                <tr>
                  <td className="font-medium">Created by</td>
                  <td>admin</td>
                </tr>
                <tr>
                  <td className="font-medium">Last modified</td>
                  <td>2020-09-09</td>
                </tr>
              </tbody>
            </table>
          </div>
  );
};

export default DropdownDetail;
