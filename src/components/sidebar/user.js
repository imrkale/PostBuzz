import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import { DEFAULT_IMAGE_PATH } from '../../constants/paths';

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`}  className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="w-20 h-20 rounded-full flex mr-3 object-cover"
          src="https://www.thestatesman.com/wp-content/uploads/2020/09/EicwoqZUYAAxDUE.jpeg"
          alt=""
          onError={(e) => {
            // e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}