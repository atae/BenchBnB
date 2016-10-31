Bench.all.map do |bench|
  json.partial! 'api/benches/bench', bench:bench
end
