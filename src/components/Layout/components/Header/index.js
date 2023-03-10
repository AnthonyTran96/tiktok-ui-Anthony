import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder={cx('Search accounts and videos')} />
                    <button className={cx('close')}></button>
                    <button className={cx('loading')}></button>
                    <button className={cx('search-btn')}></button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </div>
    );
}

export default Header;
