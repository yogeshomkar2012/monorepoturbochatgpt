import React from 'react';
import BaseCard from '../card/BaseCard';
import ButtonFactory from '../../../../factories/ButtonFactory';
import { getInitials } from '../../../../utils/src/getInitials';

export default function UserProfile({ data, onUpdate }) {
  const { name, email, contact, role, officeAddress, homeAddress, avatar } =
    data;

  return (
    <BaseCard className="max-w-2xl sm:w-100 border-t-4 border-t-blue-500">
      <div className="flex-col flex ">
        {/* Avatar Logic */}
        <div className="flex-shrink-0 p-2 flex justify-center">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-24 w-24 rounded-full object-cover border-2 border-slate-100 shadow-sm"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              {getInitials(name)}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className=" p-2 flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-tight">
              {role}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                Email Address
              </p>
              <p className="text-sm text-slate-700">{email}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                Contact Number
              </p>

              <div className="flex md:flex-col gap-2">
                <p className="text-sm text-slate-700">{contact}</p>
                <div className="w-[1px] md:hidden bg-gray-400 h-4 rotate-30 opacity-70"></div>
                <p className="text-sm text-slate-700">{contact}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                Office (Base)
              </p>
              <p className="text-sm text-slate-700 italic">{officeAddress}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                Home Address
              </p>
              <p className="text-sm text-slate-700 italic">{homeAddress}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-2">
          <ButtonFactory type="primary" onClick={onUpdate} className=" text-sm">
            Update Profile
          </ButtonFactory>
        </div>
      </div>
    </BaseCard>
  );
}
