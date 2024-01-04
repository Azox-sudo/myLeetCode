# def maxProfit(prices):
#     """
#     :type prices: List[int]
#     :rtype: int
#     """


#     if(len(prices) == 0):
#         return 0
#     else:
#         result = []

#         while True:
#             if(len(prices)!= 0):
#                 lowest_Value = min(prices)
#                 min_value = [lowest_Value,prices.index(lowest_Value)]
#                 container = prices[min_value[1]:]
#                 highest_value = max(container)
                

#                 if(len(container) == 1):
#                     prices.pop(min_value[1])
                    
#                 elif(highest_value > lowest_Value or highest_value== lowest_Value):
#                     prices.pop(min_value[1])
#                     result.append(highest_value - lowest_Value) 
                
#                 #
#                 # if(len(container) == 1):
#                 #     prices.pop(min_value[1])
#                 # elif highest_value == lowest_Value:
#                 #     prices.pop(min_value[1])
#                 # elif lowest_Value == 0:
#                 #     prices.pop(min_value[1])
#                 # elif len(container) == 0:
#                 #     break
#                 # else:
#                 #     prices.pop(min_value[1])
#                 #     result.append(highest_value - lowest_Value)
#             else:
#                 break

#         if(len(result) == 0):
#             return 0
#         else:
#             return max(result)
# def maxProfit(self,prices):




#         if len(prices) == 0:
#             return 0

#         result = []

#         while len(prices) > 0:
#             lowest_value = min(prices)
#             min_value = [lowest_value, prices.index(lowest_value)]
#             container = prices[min_value[1]:]
#             highest_value = max(container)

#             if highest_value >= lowest_value:
#                 prices = prices[:min_value[1]] + prices[min_value[1] + 1:]
#                 result.append(highest_value - lowest_value)
#             else:
#                 break

#         if len(result) == 0:
#             return 0
#         else:
#             return max(result)

def maxProfit(prices):
    if(len(prices) != 0 or len(prices) ==1):
        left = 0
        right = 1
        maxProfit = 0
        while right < len(prices):
            if prices[right] > prices[left]:
                profit = prices[right] - prices[left]
                maxProfit = max(maxProfit, profit)
            else:
                left = right
            right = right + 1
        return maxProfit
            
# def maxProfit(prices):
#     if len(prices) != 0:
#         left = 0
#         right = 1
#         maxProfit = 0
#         for i in range(len(prices)):
#             print(f"left:{left} right:{right} ")
#             if prices[right] > prices[left]:
#                 if prices[right] - prices[left] > maxProfit:
#                     maxProfit = prices[right] - prices[left]
#                 if right < len(prices) - 1:
#                     right = right + 1
#                 else:
#                     break
#             elif prices[right] < prices[left]:
#                 left = right
#                 if right =ric= len(pes) - 1:
#                     break
#                 else:
#                     right = right + 1
#             else:
#                 right = right + 1
#         return maxProfit


print(maxProfit([7,1,5,3,6,4]))