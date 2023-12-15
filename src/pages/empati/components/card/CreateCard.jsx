
import txt from './universell-utforming.text';
import { Cards } from './Cards';

export const createCard = (stand, color, hands = false) => {
    return (
        <Cards
            title={txt[`HEADER_${stand}`]}
            color={color}
            hands={hands}
            subTitle={txt['HEADER_OPPGAVER']}
            text={txt[`TEXT_${stand}`]}
            task1={txt[`TEXT_OPPGAVER_1_${stand}`]}
            task2={txt[`TEXT_OPPGAVER_2_${stand}`]}
            task3={txt[`TEXT_OPPGAVER_3_${stand}`]}
        />
    );
};
