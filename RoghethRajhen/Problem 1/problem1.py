def virusIndices(num_cases, cases):

    def matching(sub, virus):
      # To check if the p dna and virus dna are matching
        if len(sub) != len(virus):
            return False
        
        mismatch_count = sum(1 for i in range(len(sub)) if sub[i] != virus[i])
        return mismatch_count <= 1
    
    for case in cases:
        p, v = case.split()
        indices = []
        for i in range(len(p) - len(v) + 1):
            sub = p[i:i+len(v)]
            if sub == v or matching(sub, v):
                indices.append(str(i))
        if indices:
            print(" ".join(indices))
        else:
            print("No Match!")

# Input
cases = []
num_cases=input()
for i in range(int(num_cases)):
    cases.append(input())
 # Output 
virusIndices(num_cases, cases)
