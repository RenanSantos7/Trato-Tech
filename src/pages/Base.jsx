import Card from "../components/Card/Card";
import NavBar from "../components/NavBar/NavBar";

export default function Base() {
    return (
        <>
            <NavBar />

            <Card
                img='/assets/Rectangle_34.png'
                titulo='Mouse Bluetooth sem fio'
                descricao='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                anunciante='Lorem Ipsum'
                preco={35}
            />
        </>
    )
}
