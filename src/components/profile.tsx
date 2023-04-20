import { FunctionComponent } from 'react';
import { User } from '../../types';

const ProfileCard: FunctionComponent<User> = ({
  id,
  title,
  completed,
  username,
}) => {
  return completed ? (
    <div className="flex flex-col my-auto items-center">
      <div className="flex flex-col my-auto max-w-sm p-6 w-full bg-green-200 border border-gray-200 rounded-lg shadow">
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">item number:</span> {id}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">creator:</span> {username}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">title:</span> {title.slice(0, 20)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col my-auto items-center">
      <div className="flex flex-col my-auto max-w-sm p-6 w-full bg-red-200 border border-gray-200 rounded-lg shadow">
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">item number:</span> {id}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">creator:</span> {username}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="font-bold">title:</span> {title.slice(0, 20)}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
