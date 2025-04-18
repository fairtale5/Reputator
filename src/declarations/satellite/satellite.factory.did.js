// This file was automatically generated by the Juno CLI.
// Any modifications may be overwritten.

// @ts-expect-error
export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Float64, 'Err' : IDL.Text });
  const ReputationData = IDL.Record({
    'total_voting_rewards_reputation' : IDL.Float64,
    'last_calculation' : IDL.Nat64,
    'user_key' : IDL.Text,
    'tag_key' : IDL.Text,
    'vote_weight' : IDL.Float64,
    'last_known_effective_reputation' : IDL.Float64,
    'has_voting_power' : IDL.Bool,
    'total_basis_reputation' : IDL.Float64,
  });
  const Result_1 = IDL.Variant({ 'Ok' : ReputationData, 'Err' : IDL.Text });
  return IDL.Service({
    'build_version' : IDL.Func([], [IDL.Text], ['query']),
    'get_user_reputation' : IDL.Func([IDL.Text, IDL.Text], [Result], ['query']),
    'get_user_reputation_full' : IDL.Func(
        [IDL.Text, IDL.Text],
        [Result_1],
        ['query'],
      ),
    'recalculate_reputation' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
  });
};
// @ts-expect-error
export const init = ({ IDL }) => { return []; };