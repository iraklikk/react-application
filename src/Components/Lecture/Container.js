import './Container.css';
import Card from './Card';

const Container = () => {
    const cardData = [
        {
            header: 'Sollicitudin',
            changedHeader: 'Sollicitudin_2',
            p: 'Ultrices vitae suspendisse tortor odio rhoncus sit amet fringilla sed dictum non […]'
        },
        {
            header: 'Rhoncus',
            changedHeader: 'Rhoncus_2',
            p: 'Tortor etiam sem lorem cursus a velit non blandit eleifend augue aenean at lectus […]'
        },
        {
            header: 'Fringilla',
            changedHeader: 'Fringilla_2',
            p: 'Risus fusce ex quam interdum eget nulla blandit placerat mattis mauris sed viverra […]'
        },
        {
            header: 'Euismod',
            changedHeader: 'Euismod_2',
            p: 'Euismod sem quis mollis ipsum maximus non nam quis eleifend urna in sed lobortis […]'
        },
        {
            header: 'Pharetra',
            changedHeader: 'Pharetra_2',
            p: 'Magna maecenas accumsan ultricies neque sed interdum vivamus est lorem varius nec […]'
        },
        {
            header: 'Eleifend',
            changedHeader: 'Eleifend_2',
            p: 'Orci at tristique finibus est nulla ullamcorper est et consectetur varius tellus […]'
        },
    ];

    return (
        <div className="container">
            <h2>Mollis Libero Molestie</h2>
            <p>Nunc nec quis in imperdiet tellus felis et vehicula lorem.</p>
            <div className="card-container">
                <Card data={cardData[0]} />
                <Card data={cardData[1]} />
                <Card data={cardData[2]} />
                <Card data={cardData[3]} />
                <Card data={cardData[4]} />
                <Card data={cardData[5]} />
            </div>
        </div>
    )
}

export default Container;