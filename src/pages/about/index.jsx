import {
  member1,
  member10,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  member9,
} from "../../assets";
import AboutTable from "../../components/table/aboutTable";

function AboutUs() {
  const members_data = [
    {
      id: 1,
      name: "Konadu Sarpong Stella",
      role: "Member",
      indexNumber: "5221040091",
      image_src: member1,
    },
    {
      id: 2,
      name: "Agbaklah Edem Kevin",
      role: "Member",
      indexNumber: "5221040092",
      image_src: member2,
    },
    {
      id: 3,
      name: "Kusi Kwadwo Marfo",
      role: "Member",
      indexNumber: "5221040093",
      image_src: member3,
    },
    {
      id: 4,
      name: "Ezike Divine Papa Yaw",
      role: "Member",
      indexNumber: "5221040094",
      image_src: member4,
    },
    {
      id: 5,
      name: "Adu Gyamfi Michael",
      role: "Member",
      indexNumber: "5221040095",
      image_src: member5,
    },
    {
      id: 6,
      name: "Sarpong Nana Boateng Tawiah",
      role: "Member",
      indexNumber: "5221040096",
      image_src: member6,
    },
    {
      id: 7,
      name: "Yeboah William",
      role: "Member",
      indexNumber: "5221040097",
      image_src: member7,
    },
    {
      id: 8,
      name: "Acheampong Emmanuel Atta",
      role: "Member",
      indexNumber: "5221040098",
      image_src: member8,
    },
    {
      id: 9,
      name: "Anaam David",
      role: "Member",
      indexNumber: "5221040099",
      image_src: member9,
    },
    {
      id: 10,
      name: "Deri Tietaa Ebenezer",
      role: "Leader",
      indexNumber: "5221040100",
      image_src: member10,
    },
  ];
  return (
    <section className="">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <AboutTable data={members_data} />
    </section>
  );
}

export default AboutUs;
