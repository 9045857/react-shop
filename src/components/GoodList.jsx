import { Good } from "./Good";

export function GoodList(props) {
    const { goods = [] } = props;

    if (!goods.length) {
        return <h3>Nothing here.</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((good) => (
                <Good
                    key={good.mainId}
                    {...good}
                />
            ))}
        </div>
    );
}
